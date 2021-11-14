import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("11th Commerce | CommerceZone");
    }

    async getHtml() {
        return `
                   <!-- home section start -->
            <section class="home" id="home">
                <div class="max-width">
                    <div class="home-content">
                        <div class="text-2">11th <br> Commerce</div>
                    </div>
                </div>
            </section>
        
           <br>     

        <div class="el">
    <section class="services" id="11th">
        <div class="max-width">
            <h2 class="title">11th Commerce</h2>
            <div class="serv-content">
    <!---English--->
<h2 style="text-align:center;">ENGLISH</h2>
  <hr color="orange"/>

<div style="overflow: hidden;">
    <p style="float: left;" ><font size="5">  
TEXTBOOK      
</font>  </p>  
    <a href="https://drive.google.com/file/d/10vZQ5JI2U90iYAIKtuqncpqDo_wzaLmr/view?usp=drivesdk" target="_blank" style="float: right;"> <button class="button button1">Buy Now</button></a>
    
</div>
 <hr color="orange"/>

<div style="overflow: hidden;">
    <p style="float: left;"><font size="5">  
DIGEST    
</font> </p>  
    <a href="https://drive.google.com/file/d/198ghAPyXdp8TX-EWq85Gw8zRs3XTBXuq/view?usp=drivesdk" target="_blank" style="float: right;"> <button class="button button1">Buy Now</button></a>
    
</div>
<hr color="orange"/>
<br><br>

  <!---BK--->
<h2 style="text-align:center;">BOOK KEEPING AND ACCOUNTANCY
</h2>
  <hr color="orange"/>

<div style="overflow: hidden;">
    <p style="float: left;" ><font size="5">  
TEXTBOOK      
</font>  </p>  
    <a href="https://drive.google.com/file/d/10zgjOfmjyPrTF_prMsyZchrD0ZFaTRHr/view?usp=drivesdk" target="_blank" style="float: right;"> <button class="button button1">Buy Now</button></a>
    
</div>
 <hr color="orange"/>

<div style="overflow: hidden;">
    <p style="float: left;"><font size="5">  
DIGEST    
</font> </p>  
    <a href="https://drive.google.com/file/d/19I_lZGi3iMPkb3dxivNqzVY-0elxLLLe/view?usp=drivesdk" target="_blank" style="float: right;"> <button class="button button1">Buy Now</button></a>
    
</div>
<hr color="orange"/>
<br><br>

  <!---OC--->
<h2 style="text-align:center;"> ORGANISATION OF COMMERCE
</h2>
  <hr color="orange"/>

<div style="overflow: hidden;">
    <p style="float: left;" ><font size="5">  
TEXTBOOK      
</font>  </p>  
    <a href="https://drive.google.com/file/d/10ts1TaijLgZSUKwFNilNBt85DkXeBw4f/view?usp=drivesdk" target="_blank" style="float: right;"> <button class="button button1">Buy Now</button></a>
    
</div>
 <hr color="orange"/>

<div style="overflow: hidden;">
    <p style="float: left;"><font size="5">  
DIGEST    
</font> </p>  
    <a href="https://drive.google.com/file/d/19N5LIA2CO-Di0KWf2r03OxNn8eUMEtWE/view?usp=drivesdk" target="_blank" style="float: right;"> <button class="button button1">Buy Now</button></a>
    
</div>
<hr color="orange"/>
<br><br>


  <!---ECO--->
<h2 style="text-align:center;">ECONOMICS
</h2>
  <hr color="orange"/>

<div style="overflow: hidden;">
    <p style="float: left;" ><font size="5">  
TEXTBOOK      
</font>  </p>  
    <a href=" https://drive.google.com/file/d/110bzjCOrmO4S1Mns3O3scNZ38ZV6VBMD/view?usp=drivesdk" target="_blank" style="float: right;"> <button class="button button1">Buy Now</button></a>
    
</div>
 <hr color="orange"/>

<div style="overflow: hidden;">
    <p style="float: left;"><font size="5">  
DIGEST    
</font> </p>  
    <a href="https://drive.google.com/file/d/19RfIDF2ev4hBs9x0mrJqKnMvb7a7NtEq/view?usp=drivesdk
" target="_blank" style="float: right;"> <button class="button button1">Buy Now</button></a>
    
</div>
<hr color="orange"/>

<br><br>


  <!---SP--->
<h2 style="text-align:center;"> SECRETARIAL PRACTICE
</h2>
  <hr color="orange"/>

<div style="overflow: hidden;">
    <p style="float: left;" ><font size="5">  
TEXTBOOK      
</font>  </p>  
    <a href="https://drive.google.com/file/d/10ul2Crpp64kURhOYr_nD2Oi_Hy30osjk/view?usp=drivesdk" target="_blank" style="float: right;"> <button class="button button1">Buy Now</button></a>
    
</div>
 <hr color="orange"/>

<div style="overflow: hidden;">
    <p style="float: left;"><font size="5">  
DIGEST    
</font> </p>  
    <a href="https://drive.google.com/file/d/199EQnPf62RB4PocN9NaJgfiGkyeVK9LM/view?usp=drivesdk" target="_blank" style="float: right;"> <button class="button button1">Buy Now</button></a>
    
</div>
<hr color="orange"/>
<br><br>




  <!---IT--->
<h2 style="text-align:center;">INFORMATION
TECHNOLOGY
</h2>
  <hr color="orange"/>

<div style="overflow: hidden;">
    <p style="float: left;" ><font size="5">  
TEXTBOOK      
</font>  </p>  
    <a href="https://drive.google.com/file/d/111p7pBQiB-jVdqt80ZY8nt3454tzAWdn/view?usp=drivesdk" target="_blank" style="float: right;"> <button class="button button1">Buy Now</button></a>
    
</div>
 <hr color="orange"/>

<div style="overflow: hidden;">
    <p style="float: left;"><font size="5">  
DIGEST    
</font> </p>  
    <a href="https://drive.google.com/file/d/1EIw5XadBNhvGZGVUDowzmDBNef7CHQxT/view?usp=drivesdk" target="_blank" style="float: right;"> <button class="button button1">Buy Now</button></a>
    
</div>

 <hr color="orange"/>

<div style="overflow: hidden;">
    <p style="float: left;"><font size="5">  
NOTES  
</font> </p>  
    <a href="https://drive.google.com/file/d/1ES14ZeBL37CBmnPt_1gbjP45I_MNNz4r/view?usp=drivesdk" target="_blank" style="float: right;"> <button class="button button1">Buy Now</button></a>
    
</div>
               </div>
            </div>
        </div>
        </div>
    </section>
  <br>
        `;
    }
}