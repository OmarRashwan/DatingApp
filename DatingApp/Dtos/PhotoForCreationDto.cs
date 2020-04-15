using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace DatingApp.Dtos
{
    public class PhotoForCreationDto
    {
        public string Url { get; set; }
        public IFormFile File { get; set; }
        public string Description { get; set; }
        public DateTime DataAdedd { get; set; }
        public string PublicIp { get; set; }
        
        public PhotoForCreationDto()
        {
            DataAdedd = DateTime.Now;
        }
    }
}
