package main

import (
	"html/template"
	"log"
	"net/http"
	"time"

	"github.com/juniarta/fsn/event"
	"github.com/juniarta/fsn/util"
	"github.com/segmentio/ksuid"
)

func createMeowHandler(w http.ResponseWriter, r *http.Request) {
	type respone struct {
		ID string `json:"id"`
	}

	ctx := r.Context()

	// Read params request
	body := template.HTMLEscapeString(r.FormValue("body"))
	if len(body) < 1 || len(body) > 140 {
		util.ResponseError(w, http.StatusBadRequest, "Invalid body")
		return
	}

	// Create meow
	createdAt := time.Now().UTC()
	id, err := ksuid.NewRandomWithTime(createdAt)
	if err != nil {
		util.ResponseError(w, http.StatusInternalServerError, "Failed to create meow")
		return
	}

	// Publish event
	if err := event.PublishMeowCreated(meow); err != nil {
		log.Println(err)
	}

	util.ResponseOk(w, respone{ID: meow.ID})
}
