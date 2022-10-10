package com.example.keycloakspringreactexample;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

@RestController
@RequestMapping("/api")
public class Controller {
    @GetMapping("/public")
    public ResponseEntity<String> getPublic() {
        return ResponseEntity.ok("Public");
    }

    @GetMapping("/secured")
    public ResponseEntity<String> getSecured(Principal principal) {
        return ResponseEntity.ok("secured");
    }
}
