import app from './config/express';

const main = () => {
    try{
        app.listen(3000);
        
    }catch(error){
        console.log(error);
    }
}

main();