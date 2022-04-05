package com.arkon.controller;

import static org.junit.jupiter.api.Assertions.fail;

import java.time.LocalDate;
import java.time.LocalTime;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.arkon.model.Tarea;

class TareaControllerTest {
	
	@Autowired
	TareaController controller;
	
	
	@BeforeEach
	void setup() {
		this.controller = new TareaController();
		
		
	}
	

	@Test
	void testListar() {
		fail("Not yet implemented");
	}

	@Test
	void testListarPorId() {
		
		Tarea ta = new Tarea();
		ta.setId_tarea((long) 1);
		ta.setDescripcion("Prueba 3");
		ta.setDuracion(60);
		ta.setEstado("Pendiente");
		ta.setFecha_creacion(LocalDate.of(2022, 3, 28));
		ta.setFecha_fin(LocalDate.of(2022, 3, 30));
		ta.setHora_creacion(LocalTime.of(21, 15, 10));
		ta.setTemporizador("Normal");
		ta.setTiempo_tarea("4 dias 14:41:13");
				
		Mockito.when(this.controller.listarPorId((long)1)).thenReturn(new ResponseEntity<Tarea>(ta, HttpStatus.OK));
		
		
	}

	@Test
	void testRegistrar() {
		fail("Not yet implemented");
	}

	@Test
	void testModificar() {
		fail("Not yet implemented");
	}

	@Test
	void testElminar() {
		fail("Not yet implemented");
	}

	@Test
	void testBusquedaEstado() {
		fail("Not yet implemented");
	}

	@Test
	void testTareaSemanal() {
		fail("Not yet implemented");
	}

}
