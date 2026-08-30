
function download(cb){
    setTimeout(function(){
        console.log("downloading");
        cb();
        
    },1000);
}

function processing(cb){
    setTimeout(function(){
        console.log("processing...");
        cb();
        
    },1000);
}

function saving(cb){
    setTimeout(function(){
        console.log("saving....");
        cb();
        
    },1000);
}

function done(){
    setTimeout(function(){
        console.log(("done..."));
        
    },1000);
}

download(function(){
    processing(function(){
        saving(function(){
            done();
        })
    })
})