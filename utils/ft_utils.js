

const maxf = (dataX) =>Math.max(...dataX);
const minf = (dataX)=> Math.min(...dataX);

const normalise = (x, minv, maxv) => {
    const value = (x - minv) / (maxv - minv);
    return (value === 0 || value === 1) ? value.toFixed(0) : value.toFixed(4);
};

/// normalisation algo
function normalisefun(data){
    const maxv = [] ;
    const minv = [];
 
      for(let i = 0 ; i < data[0].x.length ; i++){
        const column = data.map((el) => el.x[i]);
         minv.push(minf(column));
         maxv.push(maxf(column));
      }
 
   return data.map((el)=>{
        normalisedData.push(
            {
                x : el.x.map((num , i ) =>  normalise(num , minv[i] , maxv[i]) ),
                y : el.y
            }
        )
    });
}



/// Loss function
function Loss(y , ypredicted){
    const epsilon = 1e-15;
    ypredicted = Math.max(
        epsilon,
        Math.min(1 - epsilon, ypredicted)
    );
    return - ( y * Math.log(ypredicted) + ((1 - y) * Math.log(1 - ypredicted)));
}