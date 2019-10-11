var ages = [0, 0.08333333, 0.1666667, 0.25, 0.3333333, 0.4166667, 0.5, 0.5833333, 0.6666667, 0.75, 0.8333333, 0.9166667, 1, 1.25, 1.5, 1.75, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 99];

var hlms = [[[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],[50.7, 55.2, 59.1, 62.2, 64.8, 66.9, 68.7, 70.3, 71.8, 73.2, 74.4, 75.6, 76.7, 79.8, 82.7, 85.2, 87.5, 96.2, 104, 110.8, 117.6, 124.6, 130.8, 136.3, 141.6, 147, 152.8, 159.6, 166.9, 173.2, 177.5, 179.7, 180.7, 181, 181.2, 181.2, 181.2],[0.042, 0.039, 0.036, 0.035, 0.034, 0.033, 0.033, 0.033, 0.032, 0.032, 0.032, 0.032, 0.032, 0.032, 0.032, 0.033, 0.033, 0.035, 0.037, 0.039, 0.04, 0.041, 0.041, 0.042, 0.043, 0.045, 0.047, 0.048, 0.047, 0.043, 0.04, 0.038, 0.037, 0.036, 0.036, 0.036, 0.036]],[[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],[50.4, 54.1, 57.6, 60.6, 63.1, 65.1, 66.8, 68.4, 69.9, 71.3, 72.6, 73.9, 75.2, 78.7, 81.8, 84.4, 86.7, 94.9, 102.6, 109.8, 117, 123.8, 129.8, 135, 140.5, 146.7, 153.3, 159.4, 163.4, 165.5, 166.5, 166.6, 166.8, 167.2, 167.2, 167.2, 167.2],[0.04, 0.039, 0.039, 0.038, 0.038, 0.037, 0.037, 0.036, 0.036, 0.036, 0.036, 0.036, 0.035, 0.035, 0.035, 0.035, 0.036, 0.037, 0.038, 0.04, 0.041, 0.042, 0.043, 0.043, 0.044, 0.043, 0.042, 0.04, 0.038, 0.037, 0.037, 0.037, 0.037, 0.037, 0.037, 0.037, 0.037]]];

var wlms = [[[0.8, 0.7, 0.6, 0.6, 0.5, 0.5, 0.4, 0.4, 0.3, 0.3, 0.3, 0.3, 0.2, 0.2, 0.1, 0.1, 0, -0.2, -0.3, -0.5, -0.7, -0.9, -1, -1, -1, -0.8, -0.6, -0.4, -0.2, -0.2, -0.5, -0.7, -0.9, -1, -1.2, -1.2, -1.2],[3.7, 4.7, 5.7, 6.5, 7.1, 7.7, 8.2, 8.6, 8.9, 9.3, 9.6, 9.9, 10.1, 10.8, 11.5, 12.1, 12.6, 14.9, 17.2, 19.1, 21.4, 24.4, 27.5, 30.6, 34, 37.8, 42, 47.2, 53.4, 60.1, 65.5, 69.1, 71.3, 73, 74.6, 74.6, 74.6],[0.123, 0.121, 0.119, 0.117, 0.116, 0.114, 0.113, 0.112, 0.112, 0.111, 0.111, 0.11, 0.11, 0.109, 0.109, 0.109, 0.109, 0.111, 0.115, 0.121, 0.13, 0.142, 0.154, 0.164, 0.173, 0.18, 0.183, 0.182, 0.177, 0.166, 0.154, 0.147, 0.142, 0.139, 0.136, 0.136, 0.136]],[[0.8, 0.7, 0.7, 0.6, 0.5, 0.5, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0.2, 0.1, 0, 0, -0.1, -0.3, -0.5, -0.6, -0.8, -0.9, -1, -0.9, -0.9, -0.8, -0.7, -0.6, -0.5, -0.5, -0.5, -0.5, -0.5, -0.4, -0.4, -0.4, -0.4],[3.6, 4.4, 5.2, 5.9, 6.6, 7.1, 7.5, 7.9, 8.3, 8.6, 8.9, 9.2, 9.4, 10.2, 11, 11.7, 12.4, 14.7, 16.7, 18.8, 21.4, 24.4, 27.5, 30.7, 33.9, 37.6, 42.2, 47.3, 51.9, 55.2, 57.6, 59, 59.9, 60.7, 60.7, 60.7, 60.7],[0.128, 0.126, 0.124, 0.122, 0.12, 0.118, 0.117, 0.115, 0.114, 0.113, 0.113, 0.112, 0.112, 0.11, 0.11, 0.11, 0.11, 0.113, 0.119, 0.128, 0.14, 0.153, 0.166, 0.175, 0.182, 0.186, 0.184, 0.175, 0.159, 0.143, 0.131, 0.125, 0.12, 0.117, 0.117, 0.117, 0.117]]];

var blms = [[[0.9, 0.6, 0.4, 0.2, 0, -0.1, -0.2, -0.3, -0.4, -0.5, -0.5, -0.6, -0.6, -0.8, -0.9, -1, -1.1, -1.4, -1.7, -1.9, -2, -2, -2, -1.9, -1.9, -1.8, -1.7, -1.6, -1.6, -1.5, -1.5, -1.4, -1.4, -1.3, -1.3, -1.3, -1.3],[14.3, 15.4, 16.2, 16.7, 17, 17.2, 17.2, 17.3, 17.3, 17.2, 17.2, 17.2, 17.1, 16.9, 16.8, 16.6, 16.5, 16.2, 15.9, 15.6, 15.6, 15.8, 16, 16.4, 16.9, 17.4, 18, 18.6, 19.2, 19.9, 20.5, 21.2, 21.8, 22.3, 22.9, 22.9, 22.9],[0.102, 0.097, 0.092, 0.089, 0.087, 0.085, 0.084, 0.083, 0.082, 0.081, 0.08, 0.079, 0.079, 0.077, 0.076, 0.075, 0.074, 0.071, 0.073, 0.08, 0.09, 0.1, 0.108, 0.115, 0.12, 0.123, 0.125, 0.126, 0.127, 0.127, 0.128, 0.128, 0.128, 0.128, 0.128, 0.128, 0.128]],[[-0.2, -0.3, -0.5, -0.6, -0.7, -0.8, -0.9, -1, -1.1, -1.1, -1.2, -1.3, -1.3, -1.5, -1.7, -1.8, -1.9, -2.2, -2.3, -2.3, -2.3, -2.2, -2.1, -2, -1.9, -1.7, -1.6, -1.4, -1.3, -1.2, -1.1, -1, -0.9, -0.8, -0.8, -0.8, -0.8],[14, 14.8, 15.5, 16.1, 16.5, 16.7, 16.8, 16.8, 16.8, 16.8, 16.7, 16.7, 16.6, 16.5, 16.4, 16.2, 16.1, 15.8, 15.7, 15.6, 15.7, 16, 16.3, 16.7, 17.1, 17.5, 18.1, 18.7, 19.3, 20, 20.6, 21.2, 21.7, 22.2, 22.2, 22.2, 22.2],[0.104, 0.099, 0.094, 0.091, 0.087, 0.084, 0.081, 0.078, 0.076, 0.075, 0.074, 0.073, 0.073, 0.072, 0.072, 0.072, 0.072, 0.074, 0.078, 0.086, 0.097, 0.108, 0.117, 0.124, 0.128, 0.13, 0.13, 0.128, 0.125, 0.122, 0.118, 0.115, 0.111, 0.108, 0.108, 0.108, 0.108]]];


function round(value, precision) {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
}

function sds(mod, sex, age, x) {
  if (isNaN(age) || (age === "") || isNaN(x) || (x <= 0)){
    return null;
  } else if (age < 1){
    idx = Math.floor(age*12);
  } else if (age < 2){
    idx = Math.floor(age*4) + 8;
  } else if (age < 21) {
    idx = Math.floor (age) + 14;
  } else {
    idx = 35;
  }
  f = (age - ages[idx]) / (ages[idx+1] - ages[idx]);

  l = mod[sex][0][idx] + f*(mod[sex][0][idx+1] - mod[sex][0][idx]);
  m = mod[sex][1][idx] + f*(mod[sex][1][idx+1] - mod[sex][1][idx]);
  s = mod[sex][2][idx] + f*(mod[sex][2][idx+1] - mod[sex][2][idx]);

  if (Math.abs(l) < 0.001) {
    res = round(Math.log(x/m)/s, 1);
  } else {
    res = round((Math.pow(x/m, l) -  1)/(l*s), 1);
  }
  return res;
}

/*HASTINGS.  MAX ERROR = .000001 from https://www.math.ucla.edu/~tom/distributions/normal.html (20190918)*/

function normalcdf(X){
  if (!(X) && !(X === 0)){
    return null;
  } else {
    var T=1/(1+.2316419*Math.abs(X));
    var D=.3989423*Math.exp(-X*X/2);
    var Prob=D*T*(.3193815+T*(-.3565638+T*(1.781478+T*(-1.821256+T*1.330274))));
    if (X>0) {
      Prob=1-Prob;
    }
    Prob=round(100*Prob,1);
    if(Prob == 0){
      Prob = "< 0.1";
    } else if(Prob == 100){
      Prob = "> 99.9";
    }
    return Prob;
  }
}

function normaldensity(x, mean, sd) {
  var a = x - mean;
  return Math.exp(-(a * a) / (2 * sd * sd)) / (Math.sqrt(2 * Math.PI) * sd);
}

