package com.arkon.model;

import java.time.LocalDate;
import java.time.LocalTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.datatype.jsr310.ser.LocalDateSerializer;
import com.fasterxml.jackson.datatype.jsr310.ser.LocalTimeSerializer;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

@ApiModel(description = "INFORMACION DE TAREAS")
@Entity
@Table(name = "TAREA")
public class Tarea {
	//******************************************* TABLA TAREA *******************************************
	
	//Campo ID de la tabla auto generado para cada registro
	@ApiModelProperty(notes = "OBLIGATORIO, NO EXISTE INSERT, MANIPULACION DESDE BASE DE DATOS IDENTIFICADOR DE LA TAREA")
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id_tarea;

	//Campo DESCRIPCION de la tarea
	@ApiModelProperty(notes = "OBLIGATORIO, nombre de la tarea")
	@Column(name = "descripcion", nullable = false, length = 70)
	private String descripcion;
	
	//Campo FECHA DE FIN de la tarea
	@ApiModelProperty(notes = "OPCIONAL, Fecha de fin de la tarea")
	@Column(name = "fecha_fin", nullable = true)
	@JsonSerialize(using = LocalDateSerializer.class)
	@JsonFormat(pattern = "dd/MM/yyyy")
	private LocalDate fecha_fin;
	
	//Campo DURACION de la tarea
	@ApiModelProperty(notes = "OBLIGATORIO, duracion de la tarea en minutos")
	@Column(name = "duracion", nullable = false, length = 70)
	private Integer duracion;
	
	//Campo TIEMPO DE TAREA de la tarea
	@ApiModelProperty(notes = "OPCIONAL, tiempo en que se realizo la tarea")
	@Column(name = "tiempo_tarea", nullable = true)
	private String tiempo_tarea; 
	
	//Campo ESTADO DE LA TAREA
	@ApiModelProperty(notes = "OBLIGATORIO, estado de la tarea")
	@Column(name = "estado", nullable = false, length = 70)
	private String estado;
	
	//Campo TEMPORIZADOR de la tarea
	@ApiModelProperty(notes = "OBLIGATORIO, temporizador de la tarea")
	@Column(name = "temporizador", nullable = false, length = 70)
	private String temporizador;
	
	//Campo FECHA DE CREACION de la tarea
	@ApiModelProperty(notes = "OBLIGATORIO, Fecha de creacion de la tarea")
	@Column(name = "fecha_creacion", nullable = false)
	@JsonSerialize(using = LocalDateSerializer.class)
	@JsonFormat(pattern = "dd/MM/yyyy")
	private LocalDate fecha_creacion;
	
	//Campo HORA DE CREACION de la tarea
	@ApiModelProperty(notes = "OBLIGATORIO, hora de creacion de la tarea")
	@Column(name = "hora_creacion", nullable = false)
	@JsonSerialize(using = LocalTimeSerializer.class)
	@JsonFormat(pattern = "HH:mm:ss")
	private LocalTime hora_creacion;

	//******************************************* METODOS GET Y SET DE LOS CAMPOS *******************************************
	
	public Long getId_tarea() {
		return id_tarea;
	}

	public void setId_tarea(Long id_tarea) {
		this.id_tarea = id_tarea;
	}

	public String getDescripcion() {
		return descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

	public LocalDate getFecha_fin() {
		return fecha_fin;
	}

	public void setFecha_fin(LocalDate fecha_fin) {
		this.fecha_fin = fecha_fin;
	}

	public Integer getDuracion() {
		return duracion;
	}

	public void setDuracion(Integer duracion) {
		this.duracion = duracion;
	}

	public String getTiempo_tarea() {
		return tiempo_tarea;
	}

	public void setTiempo_tarea(String tiempo_tarea) {
		this.tiempo_tarea = tiempo_tarea;
	}

	public String getEstado() {
		return estado;
	}

	public void setEstado(String estado) {
		this.estado = estado;
	}

	public String getTemporizador() {
		return temporizador;
	}

	public void setTemporizador(String temporizador) {
		this.temporizador = temporizador;
	}

	public LocalDate getFecha_creacion() {
		return fecha_creacion;
	}

	public void setFecha_creacion(LocalDate fecha_creacion) {
		this.fecha_creacion = fecha_creacion;
	}

	public LocalTime getHora_creacion() {
		return hora_creacion;
	}

	public void setHora_creacion(LocalTime hora_creacion) {
		this.hora_creacion = hora_creacion;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((descripcion == null) ? 0 : descripcion.hashCode());
		result = prime * result + ((duracion == null) ? 0 : duracion.hashCode());
		result = prime * result + ((estado == null) ? 0 : estado.hashCode());
		result = prime * result + ((fecha_creacion == null) ? 0 : fecha_creacion.hashCode());
		result = prime * result + ((fecha_fin == null) ? 0 : fecha_fin.hashCode());
		result = prime * result + ((hora_creacion == null) ? 0 : hora_creacion.hashCode());
		result = prime * result + ((id_tarea == null) ? 0 : id_tarea.hashCode());
		result = prime * result + ((temporizador == null) ? 0 : temporizador.hashCode());
		result = prime * result + ((tiempo_tarea == null) ? 0 : tiempo_tarea.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Tarea other = (Tarea) obj;
		if (descripcion == null) {
			if (other.descripcion != null)
				return false;
		} else if (!descripcion.equals(other.descripcion))
			return false;
		if (duracion == null) {
			if (other.duracion != null)
				return false;
		} else if (!duracion.equals(other.duracion))
			return false;
		if (estado == null) {
			if (other.estado != null)
				return false;
		} else if (!estado.equals(other.estado))
			return false;
		if (fecha_creacion == null) {
			if (other.fecha_creacion != null)
				return false; 
		} else if (!fecha_creacion.equals(other.fecha_creacion))
			return false;
		if (fecha_fin == null) {
			if (other.fecha_fin != null)
				return false;
		} else if (!fecha_fin.equals(other.fecha_fin))
			return false;
		if (hora_creacion == null) {
			if (other.hora_creacion != null)
				return false;
		} else if (!hora_creacion.equals(other.hora_creacion))
			return false;
		if (id_tarea == null) {
			if (other.id_tarea != null)
				return false;
		} else if (!id_tarea.equals(other.id_tarea))
			return false;
		if (temporizador == null) {
			if (other.temporizador != null)
				return false;
		} else if (!temporizador.equals(other.temporizador))
			return false;
		if (tiempo_tarea == null) {
			if (other.tiempo_tarea != null)
				return false;
		} else if (!tiempo_tarea.equals(other.tiempo_tarea))
			return false;
		return true;
	}

}
