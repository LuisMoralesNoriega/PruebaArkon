package com.arkon.service;

import java.util.List;

import com.arkon.dto.info.tareaSemanal;
import com.arkon.model.Tarea;

public interface ITareaService extends ICRUD<Tarea>{
	//Interface de control para los servios que extiende los metodos de ICRUD
	
	//Metodo para buscar tareas por estado 
	public List<Tarea> busEstado(String pestado);
	
	//Metodo para obtener tareas completadas de la semana
	public List<tareaSemanal> tareaSemanal();
	
}
