function viewNFT() {
    //if (!zombieMaster) location.reload(true);
    var tokenId = $("#tokenId").val();
    var contract = new web3.eth.Contract(abi, '0xad2f872AF013C7275eEBC6e7a43d604bA186db6D'); // FunkyBots

    var event = contract.methods.balanceOf(zombieMaster).call()
        .then(function (result) {
        var content = "<br>Your FunkyBots NFTs amount is:  ";
            console.log(result);
        content += JSON.stringify(result.toString());
        $("#lang").html(content);
        });
    
    var event = contract.methods.ownerOf(tokenId).call()
        .then(function (result) {
        var content = "<br>Owner of this token ID:  ";
            console.log(result);
        content += JSON.stringify(result.toString());
        $("#lang2").html(content);
        });
     
    var event = contract.methods.tokenURI(tokenId).call()
        .then(function (result) {
        var content = "Metadata uri:  <br>";
            console.log(result);
        content += JSON.stringify(result.toString());
        content += "<p><br><br><img src=https://ipfs.io/ipfs/QmWhPt6A5wRDXNifbXhKohCU9tgRjtoKn58Gcv7jTKpbZM/"+tokenId+".png width=256 height=256></p>";
        $("#lang3").html(content);
        });
};

function viewNFT1() {
    var contract = new web3.eth.Contract(abi, '0xad2f872AF013C7275eEBC6e7a43d604bA186db6D'); // FunkyBots

    var event = contract.methods.balanceOf(zombieMaster).call()
        .then(function (result) {
        var content = "<br>Your FunkyBots NFTs amount is:  ";
            console.log(result);
        content += JSON.stringify(result.toString());
        $("#lang").html(content);
        });

    $("#lang1").html(content);
    var content = "<p></p>";    
    for(x = 1; x < 251; x++){
    counter=0;
    var event = contract.methods.tokenURI(x).call()
        .then(function (result) {
        content += "<a href=" + result + " target=_blank> "+counter.toString()+",</a>";
        //content += "<a href=" + result + counter.toString()+"</a>";
        $("#lang1").html(content);
    counter++;
            });
    var event = contract.methods.ownerOf(x).call()
        .then(function (result) {
        if (result == zombieMaster) content += " -mine, ";
        //var content = "<br>Your FunkyBots token Ids:  ";
            //console.log(result);
        //content += JSON.stringify(result.toString());
        $("#lang1").html(content);
        });
    };
};