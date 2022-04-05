package com.arkon.service;

import java.util.List;

public interface ICRUD<T> {
	//Interface de generica para el CRUD de las tablas
	
	//Metodo para registrar
	T registrar(T t);
	
	//Metodo para modificar
	T modificar(T t);
	
	//Metodo para eliminar
	void eliminar(long id);
	
	//Metodo para listar por ID
	T listarId(long id);
	
	//Metodo para listar
	List<T> listar();
	
}
