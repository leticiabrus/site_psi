package br.com.unicuritiba.SitePsicologo.repositories;

import br.com.unicuritiba.SitePsicologo.models.Psicologo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PsicologoRepository extends JpaRepository<Psicologo, Long> {

}
