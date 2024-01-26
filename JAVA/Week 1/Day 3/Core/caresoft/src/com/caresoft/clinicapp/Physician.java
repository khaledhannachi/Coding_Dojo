package com.caresoft.clinicapp;

import java.util.ArrayList;
import java.util.Date;

public class Physician extends User implements HIPAACompliantUser {
	private ArrayList<String> patientNotes;
	private Integer idCopy;
	// TO DO: Constructor that takes an IDcopy
	
	public Physician(Integer id, int pin, Integer idCopy) {
		super(id, pin);
		this.idCopy = idCopy;
	}
	public Physician(Integer id) {
		super(id);
		 
	}
	
    // TO DO: Implement HIPAACompliantUser!
	
	public void newPatientNotes(String notes, String patientName, Date date) {
        String report = String.format(
            "Datetime Submitted: %s \n", date);
        report += String.format("Reported By ID: %s\n", this.id);
        report += String.format("Patient Name: %s\n", patientName);
        report += String.format("Notes: %s \n", notes);
        this.patientNotes.add(report);
    }

	
    // TO DO: Setters & Getters

	public ArrayList<String> getPatientNotes() {
		return patientNotes;
	}

	public void setPatientNotes(ArrayList<String> patientNotes) {
		this.patientNotes = patientNotes;
	}

	public Integer getIdCopy() {
		return idCopy;
	}
	public void setIdCopy(Integer idCopy) {
		this.idCopy = idCopy;
	}
	@Override
	public boolean assignPin(int pin) {
		String numberString = Integer.toString(pin);
	    int count = numberString.length();
		if(count == 4) {
			return true;
		}
		else {return false;}
	}

	@Override
	public boolean accessAuthorized(Integer confirmedAuthID) {
		if(idCopy == id) {
			return true;
		}
		else {return false;}
	}
}
