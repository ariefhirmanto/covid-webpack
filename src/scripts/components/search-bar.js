import data from "../data/data.js";

class SearchBar extends HTMLElement {
    connectedCallback(){
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }


    get value() {
        return this.querySelector("#selectElement").value;
    }

    render() {
        this.innerHTML = `
        <div class="row">
            <div class="input-group col-sm-6 offset-sm-3 mb-5 mt-5">
                <select name="provinsi" id="selectElement" class="custom-select">        
                </select>
                <button id="selectButtonElement" class="btn btn-primary btn-find" type="button">Cari</button>
            </div>
        </div>
       `;
       
        data.forEach(data => {
            let option = document.createElement("option");
            option.value = data;
            option.text = data;
            this.querySelector("#selectElement").appendChild(option);
        })

        this.querySelector("#selectButtonElement").addEventListener("click", this._clickEvent);
    }
}

customElements.define("search-bar", SearchBar);