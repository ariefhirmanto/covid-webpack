class CardDataRegional extends HTMLElement {
    
    connectedCallback(){
        this.render();
    }

    set value(data) {
        this._data = data;
        this.render();
    }

    render() {
        this.innerHTML = `
        <style>
            #dataInfected {
                font-family: sans-serif;
                color: #3B8FFF;
                font-size: 25px;
            }

            #dataCured {
                font-family: sans-serif;
                color: #008000;
                font-size: 25px;
            }

            #dataDead {
                font-family: sans-serif;
                color: #FF0000;
                font-size: 25px;
            }
        </style>
        <div class="row">
            <div class="col-sm-4 text-center">
                <div class="card shadow">
                    <div class="card-body">
                        <div class="card-title">
                            <h5>Terinfeksi</h5>
                        </div>
                        <p id="dataInfected"></p>
                    </div>
                </div>
            </div>
            <div class="col-sm-4 text-center">
                <div class="card shadow">
                    <div class="card-body">
                        <div class="card-title">
                            <h5>Sembuh </h5>
                        </div>
                        <p id="dataCured"></p>
                    </div>
                </div>
            </div>
            <div class="col-sm-4 text-center">
                <div class="card shadow">
                    <div class="card-body">
                        <div class="card-title">
                            <h5>Meninggal</h5>
                        </div>
                        <p id="dataDead"></p>
                    </div>
                </div>
            </div>
        </div>
       `;

       this.querySelector("#dataInfected").innerText = this._data.kasusPosi;
       this.querySelector("#dataCured").innerText = this._data.kasusSemb;
       this.querySelector("#dataDead").innerText = this._data.kasusMeni;
    }
}

customElements.define("card-data-regional", CardDataRegional);