steps = [
    [
        """
        create table guru_signup (
            id serial primary key not null,
            user_name varchar(1000) not null UNIQUE,
            password varchar(100) not null,
            description text not null
        );
        """,
        """
        drop table guru_login;
        """
    ],
    [
        """
        create table guru_form (
            id serial primary key not null,
            pick text not null,
            pick_detail text not null,
            guru_id int not null references guru_signup(id)
        )
        """,
        """
        drop table guru_form
        """
    ],
    [
        """
        create table user_signup (
            id serial primary key not null,
            user_name varchar(1000) not null UNIQUE,
            password varchar(100) not null
        );
        """,
        """
        drop table user_signup;
        """
    ],
    [
        """
        create table subscriptions (
            id serial primary key not null,
            name varchar(100) not null,
            card_number integer not null,
            exp varchar(100) not null,
            cvv smallint not null,
            user_id int not null references user_signup(id),
            guru_id int not null references guru_signup(id)
        );
        """,
        """
        drop table subscriptions
        """
    ]
]