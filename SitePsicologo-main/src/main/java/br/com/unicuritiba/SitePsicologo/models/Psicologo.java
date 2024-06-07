package br.com.unicuritiba.SitePsicologo.models;

import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
public class Psicologo {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "psicologo_seq")
    @SequenceGenerator(name = "psicologo_seq", sequenceName = "psicologo_sequence", allocationSize = 1)
    @Column(nullable = false)
    private Long id;

    @Column(nullable = false)
    private String nomeCompleto;

    @Column(nullable = false)
    private LocalDate dataNascimento;

    @Column(nullable = false)
    private LocalDate dataFormacao;

    @Column(columnDefinition = "TEXT", nullable = false)
    private String resumoProfissional;

    @Column(nullable = false)
    private String email;

    @Column(nullable = false, length = 8)
    private String crp;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNomeCompleto() {
        return nomeCompleto;
    }

    public void setNomeCompleto(String nomeCompleto) {
        this.nomeCompleto = nomeCompleto;
    }

    public LocalDate getDataFormacao() {
        return dataFormacao;
    }

    public void setDataFormacao(LocalDate dataFormacao) {
        this.dataFormacao = dataFormacao;
    }

    public LocalDate getDataNascimento() {
        return dataNascimento;
    }

    public void setDataNascimento(LocalDate dataNascimento) {
        this.dataNascimento = dataNascimento;
    }

    public String getResumoProfissional() {
        return resumoProfissional;
    }

    public void setResumoProfissional(String resumoProfissional) {
        this.resumoProfissional = resumoProfissional;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getCrp() {
        return crp;
    }

    public void setCrp(String crp) {
        this.crp = crp;
    }
}
