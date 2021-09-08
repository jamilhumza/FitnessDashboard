package com.humza.dashboard.controller;

import com.humza.dashboard.domain.Schedule;
import com.humza.dashboard.repository.ScheduleRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

@RestController
@RequestMapping("/api/v1/")
public class SchedulesController {

    private final ScheduleRepository scheduleRepository;

    public SchedulesController(ScheduleRepository scheduleRepository) {
        this.scheduleRepository = scheduleRepository;
    }

    @GetMapping
    public List<Schedule> getSchedules() {
        return scheduleRepository.findAll();
    }

    @GetMapping("/{id}")
    public Schedule getSchedule(@PathVariable Long id) {
        return scheduleRepository.findById(id).orElseThrow(RuntimeException::new);
    }

    @PostMapping
    public ResponseEntity createSchedule(@RequestBody Schedule schedule) throws URISyntaxException {
        Schedule savedSchedule = scheduleRepository.save(schedule);
        return ResponseEntity.created(new URI("/schedules/" + savedSchedule.getId())).body(savedSchedule);
    }

    @PutMapping("/{id}")
    public ResponseEntity updateSchedule(@PathVariable Long id, @RequestBody Schedule schedule) {
        Schedule currentSchedule = scheduleRepository.findById(id).orElseThrow(RuntimeException::new);
        currentSchedule.setMonday(schedule.getMonday());
        currentSchedule.setTuesday(schedule.getTuesday());
        currentSchedule.setWednesday(schedule.getWednesday());
        currentSchedule.setThursday(schedule.getThursday());
        currentSchedule.setFriday(schedule.getFriday());
        currentSchedule.setSaturday(schedule.getSaturday());
        currentSchedule.setSunday(schedule.getSunday());
        currentSchedule = scheduleRepository.save(schedule);

        return ResponseEntity.ok(currentSchedule);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deleteSchedule(@PathVariable Long id) {
        scheduleRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }

}