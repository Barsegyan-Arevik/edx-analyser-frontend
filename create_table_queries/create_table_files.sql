CREATE TABLE IF NOT EXISTS public.files
(
    id bigint NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    file_name character varying COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT files_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.files
    OWNER to postgres;
-- Index: index_name

-- DROP INDEX IF EXISTS public.index_name;

CREATE UNIQUE INDEX IF NOT EXISTS index_name
    ON public.files USING btree
    (id ASC NULLS LAST)
    TABLESPACE pg_default;
	
