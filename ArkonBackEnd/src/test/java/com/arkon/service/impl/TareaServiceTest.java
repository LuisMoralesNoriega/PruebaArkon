package com.arkon.service.impl;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.fail;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;

class TareaServiceTest {
	
	//******************************************* TEST DE LOS SERVICIOS *******************************************
	
	@Autowired
	TareaService service;
	
	@Test
	void testRegistrar() {
		fail("Not yet implemented");
	}

	@Test
	void testModificar() {
		fail("Not yet implemented");
	}

	@Test
	void testEliminar() {
		fail("Not yet implemented");
	}

	@Test
	void testListarId() {
		fail("Not yet implemented");
	}

	@Test
	void testListar() {
		fail("Not yet implemented");
	}

	@Test
	void testBusEstado() {
		fail("Not yet implemented");
	}

	//Test para actualizar tiempos
	@Test
	void testActualizarTiempos() {
		String fecha = "2022-03-28 11:00:00";		
		String calculo = this.calcularTiempos(fecha);
		String res[] = calculo.split(" ");
		
		assertEquals("3", res[0]);
	}
	
	@Test
	String calcularTiempos(String fecha) {
		this.service = new TareaService();
		return this.service.calcularTiempos(fecha);
		
	}

	@Test
	void testTareaSemanal() {
		fail("Not yet implemented");
	}

}
