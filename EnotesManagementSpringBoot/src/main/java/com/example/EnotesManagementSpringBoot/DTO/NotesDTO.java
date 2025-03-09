package com.example.EnotesManagementSpringBoot.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class NotesDTO {
//     "title":"What is java?",
//             "content":"Java is a programming language",
//             "uid":2
     private String title;
     private String content;
     private int uid;
}
