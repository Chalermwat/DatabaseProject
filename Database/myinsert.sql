use goodboigoodcar;
insert into branch value(21,'hellocar','bangkok',10,10);
insert into branch value(37,'helcd','korat',15,8);
insert into branch value(15,'hivehicle','khonkaen',11,12);

insert into customer value('1309902541789','kantanat','siripipat','phantomggg@gmail.com','0823227894',
'12/34 db road, db city, 2110322','1998-01-13',1,2);
insert into customer value('1309902525151','kan','pipat','phggg@gmail.com','0824567887',
'45/56 sa road, sa city, 2110332','1978-05-14',1,4);
insert into customer value('4215387521785','boyyyy','atreus','sonofkratos@ps4.com','0321654987',
'65/78 mid road, midgard city, 19','1989-04-03',1,1);
insert into customer value('1604865865574','gun','zazzzzz','ggezbobo@pinoy.com','0978123655',
'7/5 wat road, loz city, 4846','1998-01-13',1,3);
insert into customer value('2486278223989','hello','itsme','iwaswonderingif@afterall.com','0654891561',
'782/568 these year road, you would like to meet city, 7851','1988-05-05',1,2);

insert into vehicle_type value('toyota','vios','sedan');
insert into vehicle_type value('toyota','hyundai','sedan');
insert into vehicle_type value('bmw','2018 pickup','pickup');
insert into vehicle_type value('honda','cb1300','motorcycle');
insert into vehicle_type value('volkswagen','sharan','van');

insert into vehicle value('ab12','abcd1234','toyota','vios','2018-01-10',2,'2009-01-10',6000,'1309902541789');
insert into vehicle value('cd13','asdf1','toyota','hyundai','2018-02-24',1,'2011-11-11',5500,'1309902525151');
insert into vehicle value('fg15','bnm56','bmw','2018 pickup','2018-04-15',1,'2018-01-01',1000,'4215387521785');
insert into vehicle value('rt17','trs487','honda','cb1300','2018-03-20',2,'2017-12-09',3200,'1604865865574');
insert into vehicle value('yu20','hgj348','volkswagen','sharan','2018-05-07',2,'2016-07-16',4000,'2486278223989');

insert into reservation value('1234','fixcar','2018-01-19 09:14:07',21,'abcd1234');
insert into reservation value('2444','changemirror','2018-03-09 15:44:00',37,'asdf1');
insert into reservation value('7890','changewheel','2018-05-16 14:52:13',15,'bnm56');
insert into reservation value('4865','washcar','2018-04-01 11:21:45',21,'trs487');
insert into reservation value('7923','fixcar','2018-05-28 13:14:15',15,'hgj348');
