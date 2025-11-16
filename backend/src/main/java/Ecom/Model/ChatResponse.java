package Ecom.Model;

public class ChatResponse {
    private String reply;
    private String action;
    private String navigateTo;
    private Long productId;
	public String getReply() {
		return reply;
	}
	public void setReply(String reply) {
		this.reply = reply;
	}
	public String getAction() {
		return action;
	}
	public void setAction(String action) {
		this.action = action;
	}
	public String getNavigateTo() {
		return navigateTo;
	}
	public void setNavigateTo(String navigateTo) {
		this.navigateTo = navigateTo;
	}
	public Long getProductId() {
		return productId;
	}
	public void setProductId(Long productId) {
		this.productId = productId;
	}
    
    
    
}
