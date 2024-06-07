package br.com.unicuritiba.SitePsicologo.controllers;

import br.com.unicuritiba.SitePsicologo.models.Postagem;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import br.com.unicuritiba.SitePsicologo.repositories.PostagemRepository;
import java.util.List;
import java.util.Optional;

@CrossOrigin("*")
@RestController
@RequestMapping("/postagem")
public class PostagemController {

    @Autowired
    private PostagemRepository postagem;

    @GetMapping
    public List<Postagem> findAll() {
        List<Postagem> result = postagem.findAll();
        return result;
    }

    @PostMapping
    public Postagem createPost(@RequestBody Postagem postagemData) {
        Postagem newPost = postagem.save(postagemData);
        return newPost;
    }

    @PutMapping
    public Postagem updatePost(@RequestBody Postagem postagemData) {
        Postagem updateDataPost = postagem.save(postagemData);
        return updateDataPost;
    }

    @DeleteMapping("/{id}")
    public String deletePost (@PathVariable Long id){
        postagem.deleteById(id);
        return ("Deletado com sucesso!");
    }

    @GetMapping("/{id}")
    public ResponseEntity<Postagem> findById(@PathVariable Long id) {
        Optional<Postagem> result = postagem.findById(id);
        return ResponseEntity.ok(result.get());
    }

}

