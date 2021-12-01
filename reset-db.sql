drop table if exists `projects`;


create table `projects` (
    id int not null auto_increment, 
    main_pictures varchar(500), 
    title varchar(250), 
    details text(65000), 
    primary key (id)
);

insert into `projects` (main_pictures, title, details) values ('https://www.ocajatech.com/assets/img/projects.jpg', 'My Food', 'Je sais pas');

insert into `projects` (main_pictures, title, details) values ('https://cuttingedgepr.com/wp-content/uploads/2020/06/Project-management-2-Shutterstock_706715482.jpg', 'Retrowild', 'Je sais pas plus que My Food');