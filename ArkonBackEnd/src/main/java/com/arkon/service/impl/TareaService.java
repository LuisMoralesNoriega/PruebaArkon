package com.arkon.service.impl;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.time.DayOfWeek;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.arkon.dto.info.tareaSemanal;
import com.arkon.model.Tarea;
import com.arkon.repository.ITareaRepository;
import com.arkon.service.ITareaService;

@Service
public class TareaService implements ITareaService{
	//Clase de servicios de la tabla de Tareas
	
	//Inyeccion de Repositorio de tarea
	@Autowired
	private ITareaRepository rep;
	
	//Metodo para registrar tarea
	@Override
	public Tarea registrar(Tarea t) {
		return rep.save(t);
	}

	//Metodo para modificar tarea
	@Override
	public Tarea modificar(Tarea t) {
		return rep.save(t);
	}

	//Metodo para eliminar tarea
	@Override
	public void eliminar(long id) {
		rep.deleteById(id);			
	}

	//Metodo para listar por ID
	@Override
	public Tarea listarId(long id) {
		Tarea ta = rep.findById(id).orElse(null);
		if(ta != null) {
			this.actualizarTiempos(ta);
		}
		return rep.findById(id).orElse(null);
	}

	//Metodo para listar tareas
	@Override
	public List<Tarea> listar() {
		List<Tarea> lista = rep.findAll();
		if(lista != null) {
			for (Tarea t : lista) {
				this.actualizarTiempos(t);
			}
		}
		return rep.findAll();
	}

	//Metodo para buscar tareas por estado
	@Override
	public List<Tarea> busEstado(String pestado) {
		List<Tarea> lista = this.rep.BEstado(pestado);
		if(lista != null) {
			for (Tarea t : lista) {
				this.actualizarTiempos(t);
			}
		}
		return this.rep.BEstado(pestado);
	}
	
	//Metodo para obenter las tareas de la semana
	@Override
	public List<tareaSemanal> tareaSemanal() {
		
		LocalDate mDate = LocalDate.now(); 
		String ini = mDate.with(DayOfWeek.MONDAY).toString();
		String fin = mDate.with(DayOfWeek.SUNDAY).toString();	
		
		return this.rep.TAsemana(ini, fin); 
	}

	//Metodo para actualizar los tiempos de la tarea
	public void actualizarTiempos(Tarea t) {
		
		//Obtener fecha de creacion de la tarea para calculos
		String fcreacion = String.valueOf(t.getFecha_creacion().getYear()) + "-" + String.valueOf(t.getFecha_creacion().getMonthValue()) + "-" + String.valueOf(t.getFecha_creacion().getDayOfMonth());
		
		//Obtener hora de creacion de la tarea para calculos
		String hcreacion = String.valueOf(t.getHora_creacion().getHour()) + ":" +  String.valueOf(t.getHora_creacion().getMinute()) + ":" + String.valueOf(t.getHora_creacion().getSecond());			
	    
		//Formatear la fecha y hora de tarea
		String tt = this.calcularTiempos(fcreacion + " " + hcreacion); 
		
		//Comprobar el estado y temporizaro de la tarea para realizar accion
		if(t.getEstado().equals("Pendiente") || t.getEstado().equals("Iniciada")) {
			if(t.getTemporizador().equals("Normal")) {
				t.setTiempo_tarea(tt);
				this.modificar(t);
			}			
        }
		
	}

	//Metodo para realizar calculo de tiempo trascurrido de la tarea
	public String calcularTiempos(String fecha) {
		
		DateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		String tt = "";

		try{
			
			Date d1 = df.parse(fecha);
		    
		    LocalDateTime ahora = LocalDateTime.now();		    
		    String ah = String.valueOf(ahora.getYear()) + "-" + String.valueOf(ahora.getMonthValue()) + "-" + String.valueOf(ahora.getDayOfMonth()) + " " + String.valueOf(ahora.getHour()) + ":" + String.valueOf(ahora.getMinute()) + ":" + String.valueOf(ahora.getSecond());		    	
		    Date d2 = df.parse(ah); 
		    		    
		    long l = d1.getTime() - d2.getTime();
		    long day = l/(24*60*60*1000);
		    long hour = (l/(60*60*1000)-day*24);
		    long min = ((l/(60*1000))-day*24*60-hour*60);
		    long s = (l/1000-day*24*60*60-hour*60*60-min*60);
		    
		    String d = "";
		    
		    if ((day*-1) == 0) {
		    	d = "";
		    }else if((day*-1) == 1) {
		    	d = (day*-1) + " dia ";
		    }else{
		    	d = (day*-1) + " dias ";
		    } 
		    
		    tt = d + (hour*-1) + ":" + (min*-1) + ":" + (s*-1);
		    
		}
		catch (Exception e){
			tt = "Error: " + e;
		}
		
		return tt;
	}
	
	
	
	
	
}
