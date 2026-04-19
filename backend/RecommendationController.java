package com.example.recommendation.controller;

import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class RecommendationController {

    @PostMapping("/recommend")
    public List<String> recommend(@RequestBody Map<String, String> input) {
        String interest = input.get("interest").toLowerCase();
        List<String> courses = new ArrayList<>();

        if (interest.contains("ai")) {
            courses = Arrays.asList("Machine Learning", "Deep Learning", "NLP");
        } else if (interest.contains("web")) {
            courses = Arrays.asList("HTML", "CSS", "React", "Node.js");
        } else if (interest.contains("data")) {
            courses = Arrays.asList("Data Science", "Python", "SQL");
        } else {
            courses = Arrays.asList("Software Engineering Basics");
        }
        return courses;
    }
}
