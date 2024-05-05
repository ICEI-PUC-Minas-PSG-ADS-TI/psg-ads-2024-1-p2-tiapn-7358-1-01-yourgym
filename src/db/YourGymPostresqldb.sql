PGDMP  9                    |            yourgym    16.2    16.2     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    16397    yourgym    DATABASE     ~   CREATE DATABASE yourgym WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Portuguese_Brazil.1252';
    DROP DATABASE yourgym;
                postgres    false            N           1247    16404    dm_name    DOMAIN     8   CREATE DOMAIN public.dm_name AS character varying(255);
    DROP DOMAIN public.dm_name;
       public          postgres    false            �            1259    16430    endereco    TABLE     �   CREATE TABLE public.endereco (
    id_endereco integer NOT NULL,
    rua character varying(255),
    cidade character varying(100),
    estado character varying(50),
    cep character varying(10)
);
    DROP TABLE public.endereco;
       public         heap    postgres    false            �            1259    16398    equipamento    TABLE     �   CREATE TABLE public.equipamento (
    id_equip integer NOT NULL,
    nome_equip character varying(255),
    status_equip boolean,
    ultima_manutencao date
);
    DROP TABLE public.equipamento;
       public         heap    postgres    false            �            1259    16452    tipousuario    TABLE     f   CREATE TABLE public.tipousuario (
    usuario_id integer NOT NULL,
    tipo character varying(255)
);
    DROP TABLE public.tipousuario;
       public         heap    postgres    false            �            1259    16435    usuario    TABLE     �   CREATE TABLE public.usuario (
    id_usuario integer NOT NULL,
    nome public.dm_name,
    email character varying(255),
    senha integer,
    cli_endereco integer
);
    DROP TABLE public.usuario;
       public         heap    postgres    false    846            �          0    16430    endereco 
   TABLE DATA           I   COPY public.endereco (id_endereco, rua, cidade, estado, cep) FROM stdin;
    public          postgres    false    216   �       �          0    16398    equipamento 
   TABLE DATA           \   COPY public.equipamento (id_equip, nome_equip, status_equip, ultima_manutencao) FROM stdin;
    public          postgres    false    215   �       �          0    16452    tipousuario 
   TABLE DATA           7   COPY public.tipousuario (usuario_id, tipo) FROM stdin;
    public          postgres    false    218   �       �          0    16435    usuario 
   TABLE DATA           O   COPY public.usuario (id_usuario, nome, email, senha, cli_endereco) FROM stdin;
    public          postgres    false    217          +           2606    16434    endereco endereco_pkey 
   CONSTRAINT     ]   ALTER TABLE ONLY public.endereco
    ADD CONSTRAINT endereco_pkey PRIMARY KEY (id_endereco);
 @   ALTER TABLE ONLY public.endereco DROP CONSTRAINT endereco_pkey;
       public            postgres    false    216            )           2606    16402    equipamento equipamento_pkey 
   CONSTRAINT     `   ALTER TABLE ONLY public.equipamento
    ADD CONSTRAINT equipamento_pkey PRIMARY KEY (id_equip);
 F   ALTER TABLE ONLY public.equipamento DROP CONSTRAINT equipamento_pkey;
       public            postgres    false    215            /           2606    16456    tipousuario tipousuario_pkey 
   CONSTRAINT     b   ALTER TABLE ONLY public.tipousuario
    ADD CONSTRAINT tipousuario_pkey PRIMARY KEY (usuario_id);
 F   ALTER TABLE ONLY public.tipousuario DROP CONSTRAINT tipousuario_pkey;
       public            postgres    false    218            -           2606    16441    usuario usuario_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.usuario
    ADD CONSTRAINT usuario_pkey PRIMARY KEY (id_usuario);
 >   ALTER TABLE ONLY public.usuario DROP CONSTRAINT usuario_pkey;
       public            postgres    false    217            1           2606    16457 '   tipousuario tipousuario_usuario_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.tipousuario
    ADD CONSTRAINT tipousuario_usuario_id_fkey FOREIGN KEY (usuario_id) REFERENCES public.usuario(id_usuario);
 Q   ALTER TABLE ONLY public.tipousuario DROP CONSTRAINT tipousuario_usuario_id_fkey;
       public          postgres    false    218    217    4653            0           2606    16442 !   usuario usuario_cli_endereco_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.usuario
    ADD CONSTRAINT usuario_cli_endereco_fkey FOREIGN KEY (cli_endereco) REFERENCES public.endereco(id_endereco);
 K   ALTER TABLE ONLY public.usuario DROP CONSTRAINT usuario_cli_endereco_fkey;
       public          postgres    false    216    217    4651            �      x������ � �      �      x������ � �      �      x������ � �      �      x������ � �     