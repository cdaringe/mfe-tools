create table mfe(
    id serial primary key,
    created_at timestamp not null,
    name varchar(255) not null,
    updated_at timestamp not null,
    url_es varchar(2000) not null,
    url_umd varchar(2000) not null,
    version varchar(100) not null unique
);


insert into public.mfe(
  created_at,
  name,
  updated_at,
  url_es,
  url_umd,
  version
)
values
    (now(), 'demo', now(), '//host/abc.js', '//host/abc.es.js', '0.0.1');
