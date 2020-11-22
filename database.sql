CREATE TABLE Hotels (
    hotelID int AUTO_INCREMENT,
    address varchar(150) NOT NULL,
    pricePerNight float NOT NULL,
    currency varchar NOT NULL,
    phone int,
    email VARCHAR,

    PRIMARY KEY(hotelID)
)

CREATE TABLE Flight (
    id int AUTO_INCREMENT PRIMARY KEY,
    startPoint varchar(50) NOT NULL,
    endPoint varchar(50) NOT NULL,
    startTime DATETIME NOT NULL,
    endTime DATETIME NOT NULL,
    class varchar(20) NOT NULL,
    price decimal not null,
    duration int,
    priceCurrency VARCHAR(50) NOT NULL
)

CREATE TABLE Airport (
    
)

CREATE TABLE Packages
(
    id int
    auto_increment,
    title varchar
    (100) NOT NULL,
    description varchar
    (500) NOT NULL,
    location varchar
    (200) NOT NULL,
    hotelID int NOT NULL,
    duration TIME NOT NULL,
    price float NOT NULL,
    currency varchar
    (4) NOT NULL,
    startDate DATETIME NOT NULL,
    endDate DATETIME NOT NULL,
    flightID varchar
    (50) NOT NULL,
    transportationID varchar
    (50),
    busNo varchar
    (50),
    discountAmnt float,

    primary key
    (id)
)

    CREATE TABLE Bookings
    (
        bookID int
        auto_increment,
    clientID int NOT NULL,
    packageID int NOT NULL,
    bookDate DATETIME NOT NULL,

    primary key
        (bookID),
    foreign key
        (clientID) REFERENCES Client
        (clientID),
    foreign key
        (packageID) REFERENCES Packages
        (packageID)
)

CREATE TABLE Cars (
    regNo varchar(15),
    brand varchar(50),
    model varchar(30) NOT NULL,
    year number(4) NOT NULL,
    colour varchar(15) NOT NULL,

    Primary Key(regNo)
)

CREATE TABLE Reviews (
    reviewID integer auto_increment,
    description varchar(200) NOT NULL,
    reviewDate DATETIME NOT NULL,
    clientID integer(11) NOT NULL,

    PRIMARY KEY(reviewID),
    FOREIGN KEY(clientID) REFERENCES client(clientID)
)