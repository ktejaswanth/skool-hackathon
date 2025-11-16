package Ecom.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import Ecom.Model.ChatRequest;
import Ecom.Model.ChatResponse;
import Ecom.Model.Intent;
import Ecom.Service.IntentService;
import Ecom.Service.CommandService;

@RestController
@RequestMapping("/api/chat")
@CrossOrigin("*")
public class ChatController {

    @Autowired
    private IntentService intentService;

    @Autowired
    private CommandService commandService;

    @PostMapping
    public ChatResponse handleMessage(@RequestBody ChatRequest request) {

        // Detect intent from incoming message
        Intent intent = intentService.detectIntent(request.getMessage());

        // Process action and generate response
        ChatResponse response = commandService.process(
                intent,
                request.getMessage(),
                request.getUserId()
        );

        return response;
    }
}
