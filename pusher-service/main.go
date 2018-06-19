package main

import (
	"fmt"
	"log"
	"net/http"
	"time"

	"github.com/juniarta/fsn/event"
	"github.com/kelseyhightower/envconfig"
	"github.com/tinrab/retry"
)

type Config struct {
	NatsAddress string `envconfig:"NATS_ADDRESS"`
}

func main() {
	var cfg Config
	err := envconfig.Process("", &cfg)
	if err != nil {
		log.Fatal(err)
	}

	// Connect to Nats
	hub := newHub()
	retry.ForeverSleep(2*time.Second, func(_ int) error {
		es, err := event.NewNats(fmt.Sprintf("nats://%s", cfg.NatsAddress))
		if err != nil {
<<<<<<< HEAD
			log.Println(err)
=======
			log.Println("error pushernya", err)
>>>>>>> b87cb8c0b17c81adb089e1ffcf4d41ff0486edda
			return err
		}

		// Push messages to clients
		err = es.OnMeowCreated(func(m event.MeowCreatedMessage) {
			log.Printf("Meow received: %v\n", m)
			hub.broadcast(newMeowCreatedMessage(m.ID, m.Body, m.CreatedAt), nil)
		})
		if err != nil {
			log.Println(err)
			return err
		}

		event.SetEventStore(es)
		return nil
	})
	defer event.Close()

	// Run WebSocket server
	go hub.run()
	http.HandleFunc("/pusher", hub.handleWebSocket)
	err = http.ListenAndServe(":8080", nil)
	if err != nil {
		log.Fatal(err)
	}
}
