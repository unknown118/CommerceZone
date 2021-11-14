import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("CommerceZone");
    }

    async getHtml() {
        return `
   
          <!-- home section start -->
            <section class="home" id="home">
                <div class="max-width">
                    <div class="home-content">
                        <div class="text-2">Commerce<br>Zone</div>
                    </div>
                </div>
            </section>
        
           <br>     
`;
    }
}