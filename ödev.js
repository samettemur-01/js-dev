function calculate() {
let results;
			if (yearSelect > 5) {
				results = ödenenmiktar * 0.5;
			} else {
				results = ödenenmiktar * 0.25;
			}
            document.getElementById("results").innerHTML = "Sonuç: " + results;
        }