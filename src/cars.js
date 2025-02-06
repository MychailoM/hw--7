const bmwFCars = [
{
    model: "BMW F01 7 Series",
    year: 2012,
    price: 35000,
    engine: "3.0L Turbo I6 / 4.4L Twin-Turbo V8",
    horsepower: 315,
    image: "https://upload.wikimedia.org/wikipedia/commons/3/35/BMW_F01_740i_M_Sport.jpg"
},
{
    model: "BMW F02 7 Series Long Wheelbase",
    year: 2013,
    price: 40000,
    engine: "3.0L Turbo I6 / 4.4L Twin-Turbo V8",
    horsepower: 320,
    image: "https://upload.wikimedia.org/wikipedia/commons/d/df/BMW_F02_7_Series_LWB_%28F02%29_%28front%29.jpg"
},
{
    model: "BMW F06 6 Series Gran Coupe",
    year: 2015,
    price: 45000,
    engine: "3.0L Turbo I6 / 4.4L Twin-Turbo V8",
    horsepower: 325,
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5a/BMW_640d_Gran_Coupe_M-Sportpaket_%28F06%29_%E2%80%93_Frontansicht%2C_13._Mai_2012%2C_D%C3%BCsseldorf.jpg"
},
{
    model: "BMW F10 5 Series",
    year: 2014,
    price: 27000,
    engine: "2.0L Turbo I4 / 3.0L Turbo I6 / 4.4L Twin-Turbo V8",
    horsepower: 245,
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f2/BMW_520d_Luxury_Line_%28F10%29_%E2%80%93_Frontansicht%2C_5._April_2013%2C_D%C3%BCsseldorf.jpg"
},
{
    model: "BMW F12 6 Series Convertible",
    year: 2016,
    price: 48000,
    engine: "3.0L Turbo I6 / 4.4L Twin-Turbo V8",
    horsepower: 315,
    image: "https://upload.wikimedia.org/wikipedia/commons/5/50/BMW_640i_Cabriolet_M-Sportpaket_%28F12%29_%E2%80%93_Frontansicht%2C_11._August_2011%2C_D%C3%BCsseldorf.jpg"
},
{
    model: "BMW F13 6 Series Coupe",
    year: 2017,
    price: 46000,
    engine: "3.0L Turbo I6 / 4.4L Twin-Turbo V8",
    horsepower: 320,
    image: "https://upload.wikimedia.org/wikipedia/commons/c/cd/BMW_640d_Coupe_M-Sportpaket_%28F13%29_%E2%80%93_Frontansicht%2C_24._M%C3%A4rz_2012%2C_D%C3%BCsseldorf.jpg"
},
{
    model: "BMW F15 X5",
    year: 2015,
    price: 35000,
    engine: "2.0L Turbo I4 / 3.0L Turbo I6 / 4.4L Twin-Turbo V8",
    horsepower: 255,
    image: "https://upload.wikimedia.org/wikipedia/commons/7/7a/BMW_F15_X5_xDrive30d_M_Sportpaket_Spacegrau_Heck.jpg"
},
{
    model: "BMW F16 X6",
    year: 2017,
    price: 40000,
    engine: "3.0L Turbo I6 / 4.4L Twin-Turbo V8",
    horsepower: 300,
    image: "https://upload.wikimedia.org/wikipedia/commons/7/74/BMW_X6_xDrive40d_M_Sportpaket_%28F16%29_%E2%80%93_Frontansicht%2C_27._M%C3%A4rz_2015%2C_D%C3%BCsseldorf.jpg"
},
{
    model: "BMW F30 3 Series",
    year: 2017,
    price: 25000,
    engine: "2.0L Turbo I4 / 3.0L Turbo I6",
    horsepower: 248,
    image: "https://upload.wikimedia.org/wikipedia/commons/4/47/2019_BMW_330i_M_Sport_Automatic_2.0_Front.jpg"
},
{
    model: "BMW F80 M3",
    year: 2016,
    price: 55000,
    engine: "3.0L Twin-Turbo I6",
    horsepower: 425,
    image: "https://upload.wikimedia.org/wikipedia/commons/7/7d/BMW_F80_M3_IMG_0986.jpg"
},
{
    model: "BMW F82 M4",
    year: 2018,
    price: 65000,
    engine: "3.0L Twin-Turbo I6",
    horsepower: 503,
    image: "https://upload.wikimedia.org/wikipedia/commons/9/99/BMW_M4_F82_M_Competition_3.0_Front_2.jpg"
},
{
    model: "BMW F87 M2",
    year: 2017,
    price: 45000,
    engine: "3.0L Turbo I6",
    horsepower: 365,
    image: "https://upload.wikimedia.org/wikipedia/commons/9/99/2016_BMW_M2_F87_3.0.jpg"
},
{
    model: "BMW F90 M5",
    year: 2020,
    price: 85000,
    engine: "4.4L Twin-Turbo V8",
    horsepower: 617,
    image: "https://upload.wikimedia.org/wikipedia/commons/0/05/BMW_F90_M5_LCI_Front_%28Facelift%29.jpg"
},
  // Від F01 до F98 це дуже багато моделей, тому я додаю лише основні.
{
    model: "BMW F45 2 Series Active Tourer",
    year: 2015,
    price: 23000,
    engine: "1.5L Turbo I3 / 2.0L Turbo I4",
    horsepower: 136,
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e0/BMW_2_Series_Active_Tourer_1.5_Front.jpg"
},
{
    model: "BMW F48 X1",
    year: 2015,
    price: 29000,
    engine: "2.0L Turbo I4",
    horsepower: 228,
    image: "https://upload.wikimedia.org/wikipedia/commons/1/14/BMW_F48_X1_2.0i_xDrive.jpg"
},
{
    model: "BMW F95 X7",
    year: 2018,
    price: 75000,
    engine: "3.0L Turbo I6 / 4.4L Twin-Turbo V8",
    horsepower: 335,
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c4/2019_BMW_X7_F95_3.0_Front_2.jpg"
},
{
    model: "BMW F98 X4",
    year: 2018,
    price: 45000,
    engine: "2.0L Turbo I4 / 3.0L Turbo I6",
    horsepower: 248,
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4a/BMW_X4_F98.jpg"
}
];