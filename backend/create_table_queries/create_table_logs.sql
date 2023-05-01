CREATE TABLE IF NOT EXISTS public.logs
(
    id bigint NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 9223372036854775807 CACHE 1 ),
    username character varying(1000000) COLLATE pg_catalog."default",
    event_source character varying(1000000) COLLATE pg_catalog."default",
    name character varying(1000000) COLLATE pg_catalog."default",
    event character varying(1000000) COLLATE pg_catalog."default",
    "time" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    agent character varying(1000000) COLLATE pg_catalog."default",
    page character varying(1000000) COLLATE pg_catalog."default",
    host character varying(1000000) COLLATE pg_catalog."default",
    session character varying(1000000) COLLATE pg_catalog."default",
    referer character varying(1000000) COLLATE pg_catalog."default",
    ip character varying(1000000) COLLATE pg_catalog."default",
    event_type character varying(1000000) COLLATE pg_catalog."default",
    context character varying(1000000) COLLATE pg_catalog."default",
    accept_language character varying(1000000) COLLATE pg_catalog."default",
    file_id bigint NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 9223372036854775807 CACHE 1 ),
    CONSTRAINT logs_pkey PRIMARY KEY (id)
)
