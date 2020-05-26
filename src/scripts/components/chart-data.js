class ChartData extends HTMLElement {
    connectedCallback(){
        this.render();
    }

    set value(data) {
        this._data = data;
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="row">
            <div class="col-sm-12 col-md-12 mb-3 mt-3">
                <div class="card shadow">
                    <div class="card-body">
                        <div class="card-title">
                            <h4 class="text-center">Grafik Kasus Covid-19</h5>
                        </div>
                        <canvas id="chart"></canvas>
                    </div>
                </div>
            </div>
        </div>
       `;

       let myChart = new Chart(this.querySelector("#chart"), {
        type: 'line',
        data: {
          labels: this._data.day,
          datasets: [
            { 
                data: this._data.infectedCase,
                label: "Kasus Terinfeksi",
                borderColor: "#3B8FFF",
                fill: false
            }, 
            { 
                data: this._data.curedCase,
                label: "Kasus Sembuh",
                borderColor: "#008000",
                fill: false
            }, 
            { 
                data: this._data.deathCase,
                label: "Kasus Kematian",
                borderColor: "#FF0000",
                fill: false
            }
          ]
        },
        options: {
            scales: {
              xAxes: [{
                  scaleLabel: {
                      display: true,
                      labelString: "Hari penularan"
                  },
                  ticks: {
                    major: {
                      fontStyle: 'bold',
                      fontColor: '#FFFFFF'
                    }
                  }
              }]
            }
          }
      });
    }
}

customElements.define("chart-data", ChartData);