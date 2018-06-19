package util

import (
	"encoding/json"
	"net/http"
)

func ResponseOk(w http.ResponseWriter, body interface{}) {
<<<<<<< HEAD
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
=======
	w.WriteHeader(http.StatusOK)
	w.Header().Set("Content-Type", "application/json")
>>>>>>> b87cb8c0b17c81adb089e1ffcf4d41ff0486edda

	json.NewEncoder(w).Encode(body)
}

func ResponseError(w http.ResponseWriter, code int, message string) {
<<<<<<< HEAD
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(code)
=======
	w.WriteHeader(code)
	w.Header().Set("Content-Type", "application/json")
>>>>>>> b87cb8c0b17c81adb089e1ffcf4d41ff0486edda

	body := map[string]string{
		"error": message,
	}
	json.NewEncoder(w).Encode(body)
}
