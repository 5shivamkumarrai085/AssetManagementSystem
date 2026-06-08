using AssetManagementSystem.Api.Data;
using AssetManagementSystem.Api.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace AssetManagementSystem.Api.Migrations;

[DbContext(typeof(AppDbContext))]
partial class AppDbContextModelSnapshot : ModelSnapshot
{
    protected override void BuildModel(ModelBuilder modelBuilder)
    {
        modelBuilder
            .HasAnnotation("ProductVersion", "8.0.11")
            .HasAnnotation("Relational:MaxIdentifierLength", 63);

        modelBuilder.Entity("AssetManagementSystem.Api.Models.Asset", b =>
        {
            b.Property<int>("Id")
                .ValueGeneratedOnAdd()
                .HasColumnType("integer")
                .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

            b.Property<string>("AssetName").IsRequired().HasMaxLength(120).HasColumnType("character varying(120)");
            b.Property<string>("Brand").IsRequired().HasMaxLength(80).HasColumnType("character varying(80)");
            b.Property<string>("Category").IsRequired().HasMaxLength(80).HasColumnType("character varying(80)");
            b.Property<DateOnly>("PurchaseDate").HasColumnType("date");
            b.Property<AssetStatus>("Status").HasMaxLength(20).HasColumnType("character varying(20)").HasConversion<string>();

            b.HasKey("Id");
            b.ToTable("Assets");
        });

        modelBuilder.Entity("AssetManagementSystem.Api.Models.Employee", b =>
        {
            b.Property<int>("Id")
                .ValueGeneratedOnAdd()
                .HasColumnType("integer")
                .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

            b.Property<string>("Department").IsRequired().HasMaxLength(100).HasColumnType("character varying(100)");
            b.Property<string>("Email").IsRequired().HasMaxLength(160).HasColumnType("character varying(160)");
            b.Property<string>("Name").IsRequired().HasMaxLength(120).HasColumnType("character varying(120)");

            b.HasKey("Id");
            b.HasIndex("Email").IsUnique();
            b.ToTable("Employees");
        });

        modelBuilder.Entity("AssetManagementSystem.Api.Models.Assignment", b =>
        {
            b.Property<int>("Id")
                .ValueGeneratedOnAdd()
                .HasColumnType("integer")
                .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

            b.Property<DateOnly>("AssignedDate").HasColumnType("date");
            b.Property<int>("AssetId").HasColumnType("integer");
            b.Property<int>("EmployeeId").HasColumnType("integer");
            b.Property<DateOnly?>("ReturnedDate").HasColumnType("date");

            b.HasKey("Id");
            b.HasIndex("AssetId").IsUnique().HasFilter("\"ReturnedDate\" IS NULL");
            b.HasIndex("EmployeeId");
            b.ToTable("Assignments");
        });

        modelBuilder.Entity("AssetManagementSystem.Api.Models.Assignment", b =>
        {
            b.HasOne("AssetManagementSystem.Api.Models.Asset", "Asset")
                .WithMany("Assignments")
                .HasForeignKey("AssetId")
                .OnDelete(DeleteBehavior.Restrict)
                .IsRequired();

            b.HasOne("AssetManagementSystem.Api.Models.Employee", "Employee")
                .WithMany("Assignments")
                .HasForeignKey("EmployeeId")
                .OnDelete(DeleteBehavior.Restrict)
                .IsRequired();

            b.Navigation("Asset");
            b.Navigation("Employee");
        });
    }
}
