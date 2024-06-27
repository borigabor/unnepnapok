const unnepnapok = [
    {
        nev: "Újév",
        datum: "január 1"
    },
    {
        nev: "Nemzeti Ünnep",
        datum: "március 15"
    },
    {
        nev: "Nagypéntek",
        datum: ""
    },
    {
        nev: "Húsvét hétfő",
        datum: ""
    },
    {
        nev: "Munka üneppe",
        datum: "május 1"
    },
    {
        nev: "Nemzeti ünnep",
        datum: "augsuztus 20"
    },
    {
        nev: "Karácsony",
        datum: "december 25"
    },
    {
        nev: "Karácsony",
        datum: "december 26"
    },
    {
        nev: "Szilvszter",
        datum: "December 31"
    },
];

const napok = ["vasárnap", "hétfő", "kedd", "szerda", "csütörtök", "péntek", "szombat"];
const honapok = ["január", "február", "március", "április", "május", "június", "július", "augusztus", "szeptember", "október", "november", "december"];

const most = new Date();
const ev = most.getFullYear();



function datumVizsgal(unnep) {

        for (let i = 0; i < 7; i++) {
            if (unnep.nev.includes(napok[i])) {
                return napok[i];
        }
    }

    return null;

}


function unnepnapokatVizsgal() {

    let unnepekHTMLtemplate = "";
    
    for (let unnep of unnepnapok) {


        let honap = honapok.indexOf(unnep.datum.split(" ")[0]);
        let nap = unnep.datum.split(" ")[1];

        let x = new Date(ev, honap, nap);
        let unnepnap = x.getDay();
        

  
        unnepekHTMLtemplate += `
            <tr>
              <td>
                ${unnep.datum === "" ? "... ... ..." : unnep.datum}.
              </td>
              <td>
                ${unnep.nev}
              </td>
              <td>
                ${unnep.datum === "" ? datumVizsgal(unnep) : napok[unnepnap]}
              </td>
            </tr>
        `;
    }

    document.getElementById("unnepek-conatiner").innerHTML = `
        <table >
            <tr>
                <th colspan="3">
                   ${ev}.
                <th>
            <tr>
            ${unnepekHTMLtemplate}
        </table>
    `;

}

unnepnapokatVizsgal();