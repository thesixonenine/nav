let getAbsNum = t => parseInt(t.split(/\./).map(t => t.padStart(4, "0")).join(""), 10);
try {
    if (this.manifest && this.manifest.version) {
        let t = ["json-format"];
        getAbsNum(this.manifest.version) === getAbsNum("2020.03.1210") && t.forEach(t => Awesome.checkUpgrade(t).then(e => {
            e && (Awesome.install(t), this.fhTools[t].upgrade = !1)
        }))
    }
} catch (t) {}