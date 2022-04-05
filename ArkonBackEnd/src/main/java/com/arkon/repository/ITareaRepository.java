package com.arkon.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.arkon.dto.info.tareaSemanal;
import com.arkon.model.Tarea;

public interface ITareaRepository extends JpaRepository<Tarea, Long>{
	
	//******************************************************** CONSULTAS PARA TAREAS ********************************************************
	
	//Busqueda de tareas por estado
	@Query(value = "select * \r\n" + 
			"from tarea t\r\n" + 
			"where t.estado = :estado", nativeQuery = true)
	List<Tarea> BEstado(
			@Param("estado") String estado
			);
	
	//Busqueda de tareas por semana
	@Query(value = "select t.estado name, \r\n" + 
			"	   count(*) value\r\n" + 
			"from tarea t\r\n" + 
			"where t.fecha_creacion \r\n" + 
			"between :ini and :fin\r\n" + 
			"group by t.estado", nativeQuery = true)
	List<tareaSemanal> TAsemana(
			@Param("ini") String ini,
			@Param("fin") String fin
			);
}
