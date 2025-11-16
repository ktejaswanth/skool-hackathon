package Ecom.Service;

import org.springframework.stereotype.Service;
import Ecom.Model.Intent;

@Service
public class IntentService {

    public Intent detectIntent(String message) {
        String text = message.toLowerCase();

        if (text.contains("show") || text.contains("search") || text.contains("find"))
            return Intent.SEARCH;

        if (text.contains("add") && text.contains("cart"))
            return Intent.ADD_TO_CART;

        if (text.contains("buy") || text.contains("order now") || text.contains("purchase"))
            return Intent.BUY;

        if (text.contains("go to") || text.contains("open") || text.contains("navigate"))
            return Intent.NAVIGATE;

        if (text.contains("help") || text.contains("what can you do"))
            return Intent.HELP;

        return Intent.UNKNOWN;
    }
}
