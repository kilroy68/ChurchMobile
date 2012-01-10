Ext.regApplication({
                name: 'Bowmar',
                
                launch: function() {
                   console.log('testing...');
                   this.launched = true;
                   this.mainLaunch();
                   },
                mainLaunch: function() {
                   console.log('Inside mainLaunch');
                   //if (!device || !this.launched) {return;}
                   console.log('Creating the viewport...');
                   this.viewport = new Bowmar.Viewport();                }
                });
