

class WooPosPatch {
    constructor(){
        this.$header = null
        this.$searchField = null
        this.$btn = null
        this.init = false;
        this.btnIsActive = false;

    }
    
    btnEvent(){
        this.$btn.on('click', () => {
            this.btnIsActive = !this.btnIsActive;
            this.$btn.toggleClass('active', this.btnIsActive);
        })
        this.$searchField.on('blur', ()=>{
            if(this.btnIsActive){
                this.$searchField.focus()
            }
        })
    }
    createButton(){
        this.$searchField.parent().find('.input-group-btn').first().prepend('<button class="btn btn-secondary woopospatch-btn">F</button>')
        this.$header.append('<style>.woopospatch-btn{background: #bcc0c7} .woopospatch-btn.active{ background: #6179a3; color: white}</style>')
        this.$btn = $('.woopospatch-btn')
    }
    run(){
        $( document ).ajaxComplete(( event,request, settings) => {
            if(this.init) return;
            this.$header = $(".list-actions.products-header")
            if(this.$header.length){
                this.$searchField = this.$header.find('input[type=search]')
                this.init = true;
                this.createButton();
                this.btnEvent();
            }
        });
    }
    
}

$(document).ready(function(){
    const patch = new WooPosPatch();
    patch.run();
})
