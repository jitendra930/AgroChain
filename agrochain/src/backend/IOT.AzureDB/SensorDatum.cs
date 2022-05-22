using System;
using System.Collections.Generic;

namespace IOT.AzureDB
{
    public partial class SensorDatum
    {
        public int? Co2InPpm { get; set; }
        public DateTime? EventEnqueuedUtcTime { get; set; }

        public DateTime LocalDateTime
        {
            get
            {
                return UTCTimeStampToDateTime(EventEnqueuedUtcTime);
            }
        }

        private DateTime UTCTimeStampToDateTime(DateTime? EventEnqueuedUtcTime)
        {
            return DateTime.SpecifyKind(EventEnqueuedUtcTime ?? default, DateTimeKind.Utc);
        }
    }
}
