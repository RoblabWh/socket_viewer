class Transmission {
    constructor(callback) {
        this.msgData = ""
        this.transmissionInProgress = false;
        this.finishedCallback = callback
    }

    receive(msg) {
        if (this.transmissionInProgress) {
            if (msg == "FINISH_TRANSMISSION") {
                this.transmissionInProgress = false;
                this.finishedCallback(this.msgData);
                this.msgData = "";
            }
            else {
                this.msgData += msg;
            }
        }
        else {
            if (msg == "START_TRANSMISSION") {
                this.transmissionInProgress = true;
            }
            else {
                this.transmissionInProgress = false;
                this.msgData = "";
                console.warn("Transmission state missmatch. Resetting transmission, some data might be lost.");
            }
        }
    }
}
