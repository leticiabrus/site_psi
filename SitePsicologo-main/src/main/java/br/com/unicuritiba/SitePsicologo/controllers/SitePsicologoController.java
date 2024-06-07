package br.com.unicuritiba.SitePsicologo.controllers;

import br.com.unicuritiba.SitePsicologo.models.Postagem;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import br.com.unicuritiba.SitePsicologo.models.Postagem;
import br.com.unicuritiba.SitePsicologo.repositories.PostagemRepository;
import java.util.List;

@CrossOrigin("*")
@RestController
public class SitePsicologoController {

    @Autowired
    private PostagemRepository postagem;

    @GetMapping("/postagens")
    public List<Postagem> findAll() {
        List<Postagem> result = postagem.findAll();
        return result;
    }

    @PostMapping("/cadastrar-postagem")
    public Postagem createPost(@RequestBody Postagem postagemData) {
        Postagem newPost = postagem.save(postagemData);
        return newPost;
    }

    @PutMapping("/atualizar-postagem")
    public Postagem updatePost(@RequestBody Postagem postagemData) {
        Postagem updateDataPost = postagem.save(postagemData);
        return updateDataPost;
    }

    @DeleteMapping("/deletar-postagem/{id}")
    public String deletePost (@PathVariable Long id){
        postagem.deleteById(id);
        return ("Deletado com sucesso!");
    }

}

