create database GoodBoiGoodCar;
use GoodBoiGoodCar;

create table Customer (
	ID int(13) AUTO_INCREMENT,
    First_Name varchar(50) not null,
    Last_Name varchar(50) not null,
    Email varchar(255),
    Tel varchar(10) not null,
    Address varchar(180),
    Birthday date,
    Membership boolean not null,
    Number_of_Vehicle int(2) unsigned not null,
	primary key(ID)
    #,constraint chk_vehicle check(Number_of_Vehicle<100)
);

create table Vehicle_Type (
	Brand varchar(15) not null,
	Model varchar(15) not null,
    Type varchar(10) not null,
	primary key(Brand,Model)
);

create table Vehicle (
	Vehicle_ID varchar(8) not null,
    License_plate varchar(255),
    Brand varchar(15) not null,
    Model varchar(15) not null,
    Last_Checking_Date date,
    Number_of_Services int(3) unsigned not null,
    Car_age int(2) unsigned not null,
    Driving_distance int(6) unsigned not null,
    Customer_ID int(13) not null,
	primary key(License_plate),
    foreign key(Customer_ID) references Customer(ID) on delete cascade on update cascade,
    foreign key(Brand,Model) references Vehicle_Type(Brand,Model) on delete cascade on update cascade
    #,constraint chk_vehicle check(Number_of_Services<1000
    #and Car_age<99 and Driving_distance<1000000)
);

create table Branch (
	Branch_ID int(2) unsigned,
    Name varchar(30) not null,
    Location varchar(180) not null,
    Number_of_Employees int(3) not null,
    Queue_Capacity int(2) unsigned not null,
	primary key(Branch_ID)
);

create table Reservation (
	Reservation_ID int(13) AUTO_INCREMENT,
    Service_type varchar(20) not null,
    Time timestamp not null,
    Branch_ID int(2) unsigned not null,
    License_plate varchar(255) not null,
	primary key(Reservation_ID),
    foreign key(Branch_ID) references Branch(Branch_ID) on delete cascade on update cascade,
    foreign key(License_plate) references Vehicle(License_plate) on delete cascade on update cascade
);