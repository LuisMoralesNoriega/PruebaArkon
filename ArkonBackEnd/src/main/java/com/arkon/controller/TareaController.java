package com.arkon.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.arkon.dto.info.tareaSemanal;
import com.arkon.model.Tarea;
import com.arkon.service.ITareaService;
import com.arkon.util.ModeloNotFoundException;

@RestController
@RequestMapping("/tareas")
public class TareaController {
	//Controller para los servicios Rest
	
	//Inyeccion de Interfaz de servicios 
	@Autowired
	private ITareaService service;
	
	//Metodo GET para listar todas las tareas
	@GetMapping(value = "/listar", produces = "application/json")
	public ResponseEntity<List<Tarea>> listar() {			
		return new ResponseEntity<List<Tarea>>(this.service.listar(), HttpStatus.OK);			
	}
	
	//Metodo GET para listar todas las tareas por ID
	@GetMapping(value = "/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Tarea> listarPorId(@PathVariable("id") long id) {
		Tarea ta = service.listarId(id);
		if(ta == null) {
			throw new ModeloNotFoundException("TAREA NO ENCONTRADA: " + id);
		}
		
		return new ResponseEntity<Tarea>(ta, HttpStatus.OK);
	}

	//Metodo POST para registrar tareas
	@PostMapping(produces = "application/json", consumes = "application/json")
	public ResponseEntity<Tarea> registrar(@Valid @RequestBody Tarea pta) {		
		return new ResponseEntity<Tarea>(service.registrar(pta), HttpStatus.OK);
	}

	//Metodo PUT para actualizar las tareas
	@PutMapping(produces = "application/json", consumes = "application/json")
	public ResponseEntity<Object> modificar(@Valid @RequestBody Tarea pac) {
		return new ResponseEntity<Object>(service.modificar(pac), HttpStatus.OK);
	}
	
	//Metodo DELETE para eliminar las tareas
	@DeleteMapping(value = "/{id}")
	public String elminar(@PathVariable("id") Integer id) {
		Tarea pac = service.listarId(id);
		if (pac == null) {			
			throw new ModeloNotFoundException("TAREA NO ENCONTRADA: " + id);
		} else {
			service.eliminar(id);
			return "{ \"value\" : \"TAREA ELIMINADA CORRECTAMENTE\"}";
		}
	}
	
	//Metoto POST para buscar las tareas por estado
	@PostMapping(value = "/bestado", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<List<Tarea>> busquedaEstado(@RequestParam(value = "pestado") String pestado) {		
		return new ResponseEntity<List<Tarea>>(this.service.busEstado(pestado), HttpStatus.OK);
	}
	
	//Metodo GET para obtener las tareas completadas de la semana
	@GetMapping(value = "/tareaSemanal", produces = "application/json")
	public ResponseEntity<List<tareaSemanal>> tareaSemanal() {			
		return new ResponseEntity<List<tareaSemanal>>(this.service.tareaSemanal(), HttpStatus.OK);			
	}
	
}
