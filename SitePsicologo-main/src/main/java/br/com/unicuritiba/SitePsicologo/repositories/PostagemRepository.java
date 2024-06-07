package br.com.unicuritiba.SitePsicologo.repositories;

import br.com.unicuritiba.SitePsicologo.models.Postagem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PostagemRepository extends JpaRepository<Postagem, Long>{

}
