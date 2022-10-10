steps = [
    [
        """
        create table guru_login (
            id serial primary key not null,
            user_name varchar(1000),
            password varchar(100)
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
            guru_id int not null references guru_login(id)
        )
        """,
        """
        drop table guru_form
        """
    ]
]