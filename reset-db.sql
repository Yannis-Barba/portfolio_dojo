drop table if exists `projects`;


create table `projects` (
    id int not null auto_increment, 
    main_pictures varchar(500), 
    title varchar(250), 
    details text(65000), 
    primary key (id)
);

insert into `projects` (main_pictures, title, details) values ('https://images.unsplash.com/photo-1572177812156-58036aae439c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvamVjdHxlbnwwfHwwfHw%3D&w=1000&q=80', 'My Food', 'Je sais pas');

insert into `projects` (main_pictures, title, details) values ('https://cuttingedgepr.com/wp-content/uploads/2020/06/Project-management-2-Shutterstock_706715482.jpg', 'Retrowild', 'Je sais pas plus que My Food');